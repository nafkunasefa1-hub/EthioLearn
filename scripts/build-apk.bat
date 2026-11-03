@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo       EthioLearn AI - Android APK Compilation Pipeline
echo ========================================================
echo.

REM 1. Generate icons & Offline Question Bundle
echo [1/4] Ensuring EL Logo launcher icons and offline bundles are up-to-date...
call node scripts\generate-el-icons.cjs
if %errorlevel% neq 0 (
    echo [ERROR] Failed to generate EL logo icons.
    pause
    exit /b %errorlevel%
)

call node scripts\generate-offline-bundle.cjs
if %errorlevel% neq 0 (
    echo [ERROR] Failed to generate offline data bundle.
    pause
    exit /b %errorlevel%
)

REM 2. Build Web Assets
echo.
echo [2/4] Building production web bundles...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Web build failed.
    pause
    exit /b %errorlevel%
)

REM 3. Sync to Android Native Project
echo.
echo [3/4] Syncing web assets and plugins to Capacitor Android...
call npx.cmd cap sync android
if %errorlevel% neq 0 (
    echo [ERROR] Capacitor sync failed.
    pause
    exit /b %errorlevel%
)

REM 4. Check for Java / Gradle & Auto-Detect Android Studio
echo.
echo [4/4] Checking Android build environment...

if "%JAVA_HOME%"=="" (
    if exist "C:\Program Files\Android\Android Studio\jbr\bin\java.exe" (
        echo [INFO] Detected Android Studio bundled JDK!
        set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
        set "PATH=!JAVA_HOME!\bin;!PATH!"
    )
)

if "%ANDROID_HOME%"=="" (
    if exist "%LOCALAPPDATA%\Android\Sdk" (
        echo [INFO] Detected Android SDK at %LOCALAPPDATA%\Android\Sdk!
        set "ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk"
        set "PATH=!ANDROID_HOME!\platform-tools;!PATH!"
    )
)

where java >nul 2>nul
if %errorlevel% neq 0 (
    if "%JAVA_HOME%"=="" (
        echo.
        echo [NOTICE] Java (JDK 17) or Android Studio is not in your current PATH.
        echo.
        echo You have TWO EASY OPTIONS to complete the APK build:
        echo.
        echo   OPTION A (Recommended - 1-Click GUI):
        echo     Run: npm run cap:open
        echo     This opens the Android project directly in Android Studio.
        echo     Then click: Build > Build Bundle(s) / APK(s) > Build APK(s).
        echo.
        echo   OPTION B (Direct CLI):
        echo     Install Microsoft OpenJDK 17 or Eclipse Temurin 17.
        echo     Set JAVA_HOME and run this script again or run:
        echo     cd android ^&^& gradlew.bat assembleDebug
        echo.
        pause
        exit /b 0
    )
)

echo Compiling Android APK with Gradle...
cd android
call gradlew.bat assembleDebug
if %errorlevel% neq 0 (
    echo [ERROR] Gradle compilation encountered an issue.
    cd ..
    pause
    exit /b %errorlevel%
)

cd ..
if exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    copy "android\app\build\outputs\apk\debug\app-debug.apk" "EthioLearn-AI-v1.0.apk" >nul
    echo.
    echo ========================================================
    echo SUCCESS! APK compiled successfully:
    echo   Path: %CD%\EthioLearn-AI-v1.0.apk
    echo ========================================================
    echo.
) else (
    echo Build completed. Check android\app\build\outputs\apk\debug for output.
)

pause
