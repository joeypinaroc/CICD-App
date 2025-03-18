pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'edc3fe70-d02e-4373-81f0-c4acdee00012'
        NETLIFY_AUTH_TOKEN = credentials('for-a02-cicd-app')
    }

    stages {
        stage("Build") {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -la    
                '''
            }
        }

        stage("Test") {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    test -f build/index.html
                    npm test  
                '''
            }
        }

        stage("Deploy") {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true 
                }
            }

            steps {
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify --version
                    echo "Deploying to Site ID: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --prod --dir=build
                '''
            }
        }
    }
}