:: 檢視更新的KB
:: powershell -Command "Get-HotFix | Select HotFixID,InstalledOn"
:: wusa /uninstall /kb:1234567 /quiet /norestart
:: rd /s /q %windir%\SoftwareDistribution 
:: md %windir%\SoftwareDistribution

:: 關閉更新
:: sc stop wuauserv & sc config wuauserv start= disabled & sc stop bits & sc config bits start= disabled & sc stop dosvc & sc config dosvc start= disabled

:: 關閉更新
:: REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" /v AUOptions /t REG_DWORD /d 3 /f
:: REG DELETE "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" /v AUOptions /f

:: 更新延長
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" /v FlightSettingsMaxPauseDays /t REG_DWORD /d 36500 /f

:: 關閉搜尋
sc stop "WSearch" & sc config "WSearch" start= disabled

:: 關閉 UAC
reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 0 /f

:: 停用 Windows 11 右鍵選單的新樣式，恢復舊版右鍵選單
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve

:: 關閉 Windows 裝置的無密碼登入（PasswordLess 登入）
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device" /v DevicePasswordLessBuildVersion /t REG_DWORD /d 0 /f
control userpasswords2

:: 關閉 搜尋 + 工作檢視 + 小工具 + 聊天
powershell -Command "Set-ItemProperty -Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Search -Name SearchboxTaskbarMode -Value 0; Set-ItemProperty -Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced -Name ShowTaskViewButton -Value 0; Set-ItemProperty -Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced -Name TaskbarDa -Value 0; Set-ItemProperty -Path HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced -Name TaskbarMn -Value 0"

:: 關閉顯示最近新增的應用程式/顯示最常用應用程式/顯示最近開啟的項目
:: 個人化/開始
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Start" /v HideRecentlyAddedApps /t REG_DWORD /d 1 /f 
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Start" /v HideMostUsedApps /t REG_DWORD /d 1 /f 
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v Start_TrackDocs /t REG_DWORD /d 0 /f

:: 開啟副檔名及隱藏檔案
:: reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v HideFileExt /t REG_DWORD /d 0 /f 
:: reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v Hidden /t REG_DWORD /d 1 /f 
:: reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v ShowSuperHidden /t REG_DWORD /d 1 /f

:: 恢復隱藏檔案
:: reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v Hidden /t REG_DWORD /d 2 /f & reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v ShowSuperHidden /t REG_DWORD /d 0 /f

:: 恢復副檔名
:: reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v HideFileExt /t REG_DWORD /d 1 /f

:: 移除 Acer 程式
winget uninstall --name "Acer Product Registration"
winget uninstall --name "Acer Configuration Manager"
winget uninstall --name "ControlCenter Service"

:: 微軟 Office
winget uninstall --name "Microsoft 365 - zh-tw"
powershell "Get-AppPackage -AllUsers *OfficeHub* | Remove-AppxPackage -Allusers"

:: 微軟程式
winget uninstall --name "Microsoft OneNote - zh-tw"
winget uninstall --name "Microsoft OneDrive"
winget uninstall --name "Microsoft Teams"
winget uninstall --name "Copilot"
winget uninstall --name "Dropbox 優惠方案"


:: 重設
taskkill /f /im explorer.exe & explorer

:: 電源模式 
start ms-settings:powersleep
pause

:: 設定輸入法
start ms-settings:typing
pause

start ms-settings:regionlanguage

:: 設定權限
icacls "C:\test" /grant Everyone:(OI)(CI)F /T

pause

:: 啟動
:: powershell "irm https://get.activated.win | iex"

pause
:: 準備sysprep (不能先安裝LINE )
:: C:\Windows\System32\Sysprep\sysprep.exe /generalize /oobe /shutdown 
