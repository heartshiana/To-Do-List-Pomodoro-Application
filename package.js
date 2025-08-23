{
  "name": "todo-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "dist": "electron-builder"
  },
  "dependencies": {
    "electron": "^30.0.0"
  },
  "devDependencies": {
    "electron-builder": "^24.6.0"
  },
  "build": {
    "appId": "com.yourname.todoapp",
    "productName": "TodoPomodoro",
    "files": [
      "**/*"
    ],
    "directories": {
      "buildResources": "assets"
    },
    "win": {
      "target": "nsis",
      "icon": "assets/icon.ico"
    },
    "mac": {
      "target": "dmg",
      "icon": "assets/icon.icns"
    }
  }
}
