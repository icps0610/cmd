window.CMD_COMMANDS = [
  {
    "title": "印表機PORT_UI",
    "code": "printui /s /t1",
    "tags": [
      "印表機"
    ]
  },
  {
    "title": "系統稽核模式",
    "code": "[Ctrl + Shift + F3]",
    "tags": [
      "部署"
    ]
  },
  {
    "title": "win相機",
    "code": "start microsoft.windows.camera:",
    "tags": [
      "系統"
    ]
  },
  {
    "title": "權限設定 C:\\test",
    "code": "icacls c:\\test /grant everyone:F /T /C /Q",
    "tags": [
      "權限",
      "檔案"
    ]
  },
  {
    "title": "移除特定更新 ( KB:1234567)",
    "code": "wusa /uninstall /kb:1234567 /quiet /norestart",
    "tags": [
      "更新"
    ]
  },
  {
    "title": "DNS查詢",
    "code": "nslookup google.com\nnslookup google.com 8.8.8.8",
    "tags": [
      "網路"
    ]
  },
  {
    "title": "啟動",
    "code": "powershell \"irm https://get.activated.win | iex\"",
    "tags": [
      "系統"
    ]
  },
  {
    "title": "區網ping",
    "code": "for /l %i in (1,1,254) do ping -n 1 -w 1 1.2.3.%i",
    "tags": [
      "網路"
    ]
  },
  {
    "title": "建立本機帳號",
    "code": "[shift+F10] start ms-cxh:localonly 或者 oobe\\bypassnro",
    "tags": [
      "部署",
      "帳號"
    ]
  },
  {
    "title": "連線IP PORT測試",
    "code": "powershell \"Test-NetConnection 2140008964 -Port 443\"",
    "tags": [
      "網路"
    ]
  },
  {
    "title": "關閉搜尋",
    "code": "sc stop \"WSearch\" & sc config \"WSearch\" start= disabled",
    "tags": [
      "服務"
    ]
  },
  {
    "title": "檢視更新的KB",
    "code": "powershell -Command \"Get-HotFix | Select HotFixID,InstalledOn\"",
    "tags": [
      "更新"
    ]
  },
  {
    "title": "系統封裝 Sysprep",
    "code": "sysprep /generalize /oobe /shutdown /unattend:C:\\autounattend.xml",
    "tags": [
      "部署"
    ]
  },
  {
    "title": "新增帳號",
    "code": "net user user passwd /add\nnet localgroup administrators user /add",
    "tags": [
      "帳號"
    ]
  },
  {
    "title": "印表機移除",
    "code": "電腦\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Print\\Printers\\",
    "tags": [
      "印表機",
      "登錄檔"
    ]
  },
  {
    "title": "清除 Windows Update 快取",
    "code": "rd /s /q %windir%\\SoftwareDistribution & md %windir%\\SoftwareDistribution",
    "tags": [
      "更新"
    ]
  },
  {
    "title": "日期時間",
    "code": "echo %date:~0,4%.%date:~5,2%.%date:~8,2%.%time:~0,2%.%time:~3,2%.%time:~6,2%",
    "tags": [
      "系統"
    ]
  },
  {
    "title": "系統切換安全模式",
    "code": "bcdedit /set {current} safeboot minimal\nbcdedit /deletevalue {current} safeboot",
    "tags": [
      "系統"
    ]
  },
  {
    "title": "權限使用者設定",
    "code": "takeown /f \"D:\\Users\\test\" /r /d y\nicacls \"D:\\Users\\test\" /grant \"%USERNAME%\":(OI)(CI)F\n",
    "tags": [
      "權限",
      "檔案"
    ]
  },
  {
    "title": "USB 磁碟 退出",
    "code": "(New-Object -ComObject Shell.Application).Namespace(17).ParseName('E:').InvokeVerb('Eject')",
    "tags": [
      "磁碟"
    ]
  },
  {
    "title": "恢復舊版右鍵選單",
    "code": "reg add \"HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32\" /f /ve",
    "tags": [
      "介面",
      "登錄檔"
    ]
  },
  {
    "title": "移除更新設定",
    "code": "REG DELETE \"HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU\" /v AUOptions /f",
    "tags": [
      "更新",
      "登錄檔"
    ]
  },
  {
    "title": "關閉 UAC",
    "code": "reg add HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System /v EnableLUA /t REG_DWORD /d 0 /f",
    "tags": [
      "系統",
      "登錄檔"
    ]
  },
  {
    "title": "重複IP",
    "code": "wevtutil qe System /q:\"*[System[Provider[@Name='Tcpip'] and (EventID=4198 or EventID=4199)]]\" /f:text /c:5",
    "tags": [
      "網路",
      "事件記錄"
    ]
  },
  {
    "title": "恢復副檔名",
    "code": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v HideFileExt /t REG_DWORD /d 1 /f",
    "tags": [
      "介面",
      "登錄檔"
    ]
  },
  {
    "title": "設定 工具列/開啟電源/輸入法/地區",
    "code": "start ms-settings:taskbar\nstart ms-settings:powersleep\nstart ms-settings:typing \nstart ms-settings:regionlanguage",
    "tags": [
      "介面"
    ]
  },
  {
    "title": "關閉更新 (登錄檔)",
    "code": "REG ADD \"HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU\" /v AUOptions /t REG_DWORD /d 3 /f",
    "tags": [
      "更新",
      "登錄檔"
    ]
  },
  {
    "title": "更新延長 (36500天)",
    "code": "reg add \"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\WindowsUpdate\\UX\\Settings\" /v FlightSettingsMaxPauseDays /t REG_DWORD /d 36500 /f",
    "tags": [
      "更新",
      "登錄檔"
    ]
  },
  {
    "title": "DHCP 派發紀錄(顯示等級2,3)",
    "code": "wevtutil qe System /q:\"*[System[Provider[@Name='Microsoft-Windows-DHCP-Client'] and (Level=2 or Level=3)]]\" /f:text /rd:true /c:5",
    "tags": [
      "網路",
      "事件記錄"
    ]
  },
  {
    "title": "PE下操作: 帳號",
    "code": "reg load HKLM\\OFFLINE C:\\Windows\\System32\\Config\\SAM\nreg query HKLM\\OFFLINE\\SAM\\Domains\\Account\\Users\\Names\nreg unload HKLM\\OFFLINE",
    "tags": [
      "PE",
      "帳號",
      "登錄檔"
    ]
  },
  {
    "title": "印表機PORT_PS",
    "code": "Get-PrinterPort | Where-Object { $_.PrinterHostAddress -like \"*168*\" } | Format-Table Name, PrinterHostAddress, SNMPEnabled, Protocol",
    "tags": [
      "印表機",
      "網路"
    ]
  },
  {
    "title": "關閉無密碼登入",
    "code": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\PasswordLess\\Device\" /v DevicePasswordLessBuildVersion /t REG_DWORD /d 0 /f",
    "tags": [
      "帳號",
      "登錄檔"
    ]
  },
  {
    "title": "更新服務關閉",
    "code": "sc stop wuauserv & sc config wuauserv start= disabled & sc stop bits & sc config bits start= disabled & sc stop dosvc & sc config dosvc start= disabled",
    "tags": [
      "更新",
      "服務"
    ]
  },
  {
    "title": "PE下操作: 查詢IP",
    "code": "reg load HKLM\\OFFLINE C:\\Windows\\System32\\Config\\SYSTEM\nreg query \"HKLM\\OFFLINE\\ControlSet001\\Services\\Tcpip\\Parameters\\Interfaces\" /s \nreg unload HKLM\\OFFLINE",
    "tags": [
      "PE",
      "網路",
      "登錄檔"
    ]
  },
  {
    "title": "移除WindowsAI",
    "code": "https://github.com/zoicware/RemoveWindowsAI\npowershell \"& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/zoicware/RemoveWindowsAI/main/RemoveWindowsAi.ps1')))\"",
    "tags": [
      "程式"
    ]
  },
  {
    "title": "自動重傳下載",
    "code": "curl.exe -s -S -L -k -C - --retry 999 --retry-delay 10 --retry-all-errors -o \"ubuntu-26.04.1-netboot-amd64.tar.gz\" \"https://ubuntu.cs.nycu.edu.tw/ubuntu-release/resolute/ubuntu-26.04.1-netboot-amd64.tar.gz\"",
    "tags": [
      "網路"
    ]
  },
  {
    "title": "磁區操作",
    "code": ":: 解除隱藏\n(echo select volume 1 & echo remove letter=W noerr & echo attributes volume set hidden) | diskpart\n:: 隱藏\n(echo select volume 1 & echo attributes volume clear hidden & echo assign letter=W) | diskpart",
    "tags": [
      "磁碟"
    ]
  },
  {
    "title": "縮短網路磁碟機逾時等待",
    "code": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters\" /v SessTimeout /t REG_DWORD /d 10 /f\nreg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters\" /v ExtendedSessTimeout /t REG_DWORD /d 10 /f",
    "tags": [
      "網路",
      "登錄檔"
    ]
  },
  {
    "title": "抓包 pktmon",
    "code": "pktmon stop\npktmon filter remove\npktmon start --etw\n\n:: 錄60秒結束\nping -n 60 2140008964 > nul\npktmon stop\npktmon etl2pcap PktMon.etl -o PktMon.pcapng\n\n:: 過濾\n:: pktmon filter add -i 168.95.1.1 -p 53\n:: 要顯示的話 \n:: pktmon start --etw -m real-time ",
    "tags": [
      "網路"
    ]
  },
  {
    "title": "印表機新增",
    "code": "$ip = \"192.168.0.201\"; $printName = \"印表機名稱\"; if (-not (Get-PrinterPort -Name $ip -ErrorAction SilentlyContinue)) { Add-PrinterPort -Name $ip -PrinterHostAddress $ip }; Add-Printer -Name $printName -PortName $ip -DriverName \"Microsoft Print to PDF\"",
    "tags": [
      "印表機"
    ]
  },
  {
    "title": "備份使用者資料夾",
    "code": "for /f \"delims=\" %i in ('dir /b /ad-h-s \"C:\\Users\"') do @if /i not \"%i\"==\"Public\" for %l in (Desktop Documents Downloads Favorites) do @if exist \"C:\\Users\\%i\\%l\" (echo = 開始同步 %i\\%l & robocopy \"C:\\Users\\%i\\%l\" \"Z:\\BackupUsers\\%i\\%l\" /MIR /XJ /R:1 /W:3 /NDL /NJH /NFL /NJS /MT:2)",
    "tags": [
      "檔案"
    ]
  },
  {
    "title": "開啟副檔名及隱藏檔案",
    "code": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v HideFileExt /t REG_DWORD /d 0 /f & reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v Hidden /t REG_DWORD /d 1 /f & reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v ShowSuperHidden /t REG_DWORD /d 1 /f",
    "tags": [
      "介面",
      "登錄檔"
    ]
  },
  {
    "title": "紀錄ping",
    "code": "$ip = \"2140008964\"; $logFile = \"log_$($ip -replace '\\.', '_').txt\"; while ($true) { ping.exe -n 1 $ip | Where-Object { $_ -match \"TTL=|逾時|timed out|無法連線|unreachable\" } | ForEach-Object { $line = \"{0:yyyy-MM-dd HH:mm:ss} - {1}\" -f (Get-Date), $_; Write-Host $line; Add-Content -Path $logFile -Value $line -Encoding utf8 }; Start-Sleep -Seconds 10 }",
    "tags": [
      "網路"
    ]
  },
  {
    "title": "移除微軟Acer程式",
    "code": "Get-AppxPackage *OfficeHub* | Remove-AppxPackage;$apps=@(\"Microsoft OneNote - zh-tw\",\"Microsoft OneDrive\",\"Microsoft Teams\",\"Copilot\",\"Dropbox 優惠方案\",\"Microsoft 新聞\",\"Microsoft 365 - zh-tw\",\"Acer Product Registration\",\"Acer Configuration Manager\",\"ControlCenter Service\");$installed=winget list --accept-source-agreements | Out-String;foreach($app in $apps){if($installed -match [regex]::Escape($app)){Write-Host \"移除：$app\";winget uninstall --name $app --exact --silent --disable-interactivity}else{Write-Host \"不存在：$app\"}}",
    "tags": [
      "程式"
    ]
  }
];
