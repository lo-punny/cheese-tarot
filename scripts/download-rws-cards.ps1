$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$target = Join-Path $root "assets\cards\rws"

if (-not (Test-Path -LiteralPath $target)) {
  New-Item -ItemType Directory -Path $target | Out-Null
}

$majorSources = @(
  @("RWS_Tarot_00_Fool.jpg", "major-00-fool.jpg"),
  @("RWS_Tarot_01_Magician.jpg", "major-01-magician.jpg"),
  @("RWS_Tarot_02_High_Priestess.jpg", "major-02-high-priestess.jpg"),
  @("RWS_Tarot_03_Empress.jpg", "major-03-empress.jpg"),
  @("RWS_Tarot_04_Emperor.jpg", "major-04-emperor.jpg"),
  @("RWS_Tarot_05_Hierophant.jpg", "major-05-hierophant.jpg"),
  @("RWS_Tarot_06_Lovers.jpg", "major-06-lovers.jpg"),
  @("RWS_Tarot_07_Chariot.jpg", "major-07-chariot.jpg"),
  @("RWS_Tarot_08_Strength.jpg", "major-08-strength.jpg"),
  @("RWS_Tarot_09_Hermit.jpg", "major-09-hermit.jpg"),
  @("RWS_Tarot_10_Wheel_of_Fortune.jpg", "major-10-wheel-of-fortune.jpg"),
  @("RWS_Tarot_11_Justice.jpg", "major-11-justice.jpg"),
  @("RWS_Tarot_12_Hanged_Man.jpg", "major-12-hanged-man.jpg"),
  @("RWS_Tarot_13_Death.jpg", "major-13-death.jpg"),
  @("RWS_Tarot_14_Temperance.jpg", "major-14-temperance.jpg"),
  @("RWS_Tarot_15_Devil.jpg", "major-15-devil.jpg"),
  @("RWS_Tarot_16_Tower.jpg", "major-16-tower.jpg"),
  @("RWS_Tarot_17_Star.jpg", "major-17-star.jpg"),
  @("RWS_Tarot_18_Moon.jpg", "major-18-moon.jpg"),
  @("RWS_Tarot_19_Sun.jpg", "major-19-sun.jpg"),
  @("RWS_Tarot_20_Judgement.jpg", "major-20-judgement.jpg"),
  @("RWS_Tarot_21_World.jpg", "major-21-world.jpg")
)

$rankMap = @(
  @("01", "ace"),
  @("02", "02"),
  @("03", "03"),
  @("04", "04"),
  @("05", "05"),
  @("06", "06"),
  @("07", "07"),
  @("08", "08"),
  @("09", "09"),
  @("10", "10"),
  @("11", "page"),
  @("12", "knight"),
  @("13", "queen"),
  @("14", "king")
)

$suitMap = @(
  @("Wands", "wands"),
  @("Cups", "cups"),
  @("Swords", "swords"),
  @("Pents", "pentacles")
)

$cards = [System.Collections.Generic.List[object]]::new()
$majorSources | ForEach-Object { $cards.Add($_) }

foreach ($suit in $suitMap) {
  foreach ($rank in $rankMap) {
    $cards.Add(@("$($suit[0])$($rank[0]).jpg", "$($suit[1])-$($rank[1]).jpg"))
  }
}

foreach ($card in $cards) {
  $sourceName = [uri]::EscapeDataString($card[0])
  $destination = Join-Path $target $card[1]
  $url = "https://commons.wikimedia.org/wiki/Special:FilePath/${sourceName}?width=420"

  if ((Test-Path -LiteralPath $destination) -and ((Get-Item -LiteralPath $destination).Length -gt 1024)) {
    Write-Host "Skipping $($card[1])"
    continue
  }

  Write-Host "Downloading $($card[1])"
  $downloaded = $false

  for ($attempt = 1; $attempt -le 4; $attempt++) {
    try {
      Invoke-WebRequest `
        -Uri $url `
        -OutFile $destination `
        -Headers @{ "User-Agent" = "CheeseTarot/1.0 (GitHub Pages tarot site asset download)" }
      $downloaded = $true
      break
    } catch {
      if ($attempt -eq 4) {
        throw
      }

      $waitSeconds = 10 * $attempt
      Write-Host "Retrying $($card[1]) in $waitSeconds seconds"
      Start-Sleep -Seconds $waitSeconds
    }
  }

  if ($downloaded) {
    Start-Sleep -Milliseconds 900
  }
}

Write-Host "Downloaded $($cards.Count) Rider-Waite-Smith cards to $target"
