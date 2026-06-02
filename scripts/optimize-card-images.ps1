$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$target = Join-Path $root "assets\cards\rws"
$quality = 72L

Add-Type -AssemblyName System.Drawing

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }

$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality,
  $quality
)

$files = @(Get-ChildItem -LiteralPath $target -Filter *.jpg)
$before = ($files | Measure-Object Length -Sum).Sum

$files | ForEach-Object {
  $tempPath = "$($_.FullName).tmp"
  $image = [System.Drawing.Image]::FromFile($_.FullName)

  try {
    $image.Save($tempPath, $codec, $encoderParams)
  } finally {
    $image.Dispose()
  }

  Move-Item -LiteralPath $tempPath -Destination $_.FullName -Force
}

$afterFiles = @(Get-ChildItem -LiteralPath $target -Filter *.jpg)
$after = ($afterFiles | Measure-Object Length -Sum).Sum

[pscustomobject]@{
  Files = $afterFiles.Count
  BeforeMB = [math]::Round($before / 1MB, 2)
  AfterMB = [math]::Round($after / 1MB, 2)
  SavedMB = [math]::Round(($before - $after) / 1MB, 2)
}
