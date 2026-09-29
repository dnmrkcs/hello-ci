pipeline {

    agent any

    tools {
        nodejs 'node20'
    }

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        SELENIUM_URL = 'http://selenium:4444/wd/hub'
    }

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Start App') {
            steps {
                sh '''
                    nohup node src/app.js > app.log 2>&1 &
                    sleep 5
                    cat app.log
                    curl -I http://localhost:3000
                '''
            }
        }

        stage('UI Test') {
            steps {
                sh 'npm run test:e2e'
            }
        }
    }

    post {
    always {
        junit testResults: 'test-results/junit.xml', allowEmptyResults: true
    }
    }
}