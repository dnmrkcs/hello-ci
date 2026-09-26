pipeline {
    agent any
    
    triggers {
        pollSCM('H/2 * * * *')
    }
    
    environment {
        SELENIUM_REMOTE_URL = 'http://selenium:4444/wd/hub'
    }
    
    tools { 
        nodejs 'node20' 
    }
    
    stages {
        stage('Install') { 
            steps { 
                sh 'npm install' 
            } 
        }
        stage('Start App') {
            steps {
                sh 'node src/app.js &'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    
    post {
        always {
            junit 'test-results.xml'
        }
    }
}