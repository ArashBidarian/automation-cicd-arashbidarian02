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
                    npm install && npm run cypress:frontend:createrum
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
                sh '''
                    cd backend-project-mochawsome/teau-hotel-application/backend-test/
                    npm install && npm run test:report:assignment02
                    echo 'Need to publish test results'
                    pwd
                    ls -lart
                '''
                archiveArtifacts allowEmptyArchive: true,  artifacts: 'backend-project-mochawsome/teau-hotel-application/backend-test/cypress/videos/**', followSymlinks: false
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'backend-project-mochawsome/teau-hotel-application/backend-test/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Backend Report', 
                    reportTitles: ''])
                
            }
        }
        
        
        stage('Performance tests') {
            steps {
                sh '''
                    cd performance-project-jmeter/performance-tests/
                    rm test1.csv -Rf && rm html-reports/ -Rf
                    jmeter -n -t performance_arashbidarian.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'performance-project-jmeter/performance-tests/html-reports', 
                    reportFiles: 'index.html', 
                    reportName: 'JMeter dashboard Report', 
                    reportTitles: '' 
                ])
            }
        }
        
    }
}