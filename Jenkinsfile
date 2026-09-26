pipeline {

    agent any

    tools {nodejs 'node20'}

    triggers {pollSCM('H/2 * * * *')}

    environment {SELENIUM_URL = 'http://selenium:4444/wd/hub'}

    stages {

        stage('Install') {
            steps {
                sh 'npm install'}}

        stage('Test') {
            steps {
                sh 'npm test'}}

        stage('Start App') {
            steps {
                sh 'node src/app.js > app.log 2>&1 &'
                sleep 5}}

        stage('UI Test') {
            steps {
                sh 'npx jest tests/e2e/home.test.js --runInBand --reporters=default --reporters=jest-junit'}}}

    post {
        always {
            junit 'test-results/*.xml'}}}