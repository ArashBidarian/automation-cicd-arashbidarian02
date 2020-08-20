pipeline {
    /* insert Declarative Pipeline here */
    agent any
        stages {
        stage('Deploy/Build App') {
            steps {
                sh '''
                    echo 'Application deployed successfully!'
                '''
            }
        }
        stage('Frontend tests') {
            steps {
                sh '''
                    cd frontend-project-cypress/cypress-demo3-vue-project/frontend-tests/
                    npm install && npm run cypress:run
                    echo 'Need to publish test results'
                    pwd
                    ls -lart
                '''
                archiveArtifacts allowEmptyArchive: true,  artifacts: 'frontend-project-cypress/cypress-demo3-vue-project/frontend-tests/cypress/videos/**', followSymlinks: false
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'frontend-project-cypress/cypress-demo3-vue-project/frontend-tests/mochawesome-report/', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend Report', 
                    reportTitles: '' 
                ])
            }
        }
        
        stage('Backend tests') {
            steps {

                sh 'pwd'
                sh 'ls -lart'
            }
        }
        
        stage('Performance tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
        
    }
}