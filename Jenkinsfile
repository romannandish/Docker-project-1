pipeline {
    agent any

    environment {
        // Docker Hub Images
        BACKEND_IMAGE = "romannandish/mern-backend"
        FRONTEND_IMAGE = "romannandish/mern-frontend"

        // Container Names
        BACKEND_CONTAINER = "mern-backend-container"
        FRONTEND_CONTAINER = "mern-frontend-container"
    }

    stages {

        /* ---------------- Pull Images ---------------- */

        stage('Pull Backend Image') {
            steps {
                sh 'docker pull $BACKEND_IMAGE:latest'
            }
        }

        stage('Pull Frontend Image') {
            steps {
                sh 'docker pull $FRONTEND_IMAGE:latest'
            }
        }

        /* ---------------- Stop Old Containers ---------------- */

        stage('Stop Old Containers') {
            steps {
                sh '''
                docker stop $BACKEND_CONTAINER || true
                docker rm $BACKEND_CONTAINER || true

                docker stop $FRONTEND_CONTAINER || true
                docker rm $FRONTEND_CONTAINER || true
                '''
            }
        }

        /* ---------------- Run New Containers ---------------- */

        stage('Run Backend Container') {
            steps {
                sh '''
                docker run -d \
                --name $BACKEND_CONTAINER \
                -p 5000:5000 \
                --restart always \
                $BACKEND_IMAGE:latest
                '''
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh '''
                docker run -d \
                --name $FRONTEND_CONTAINER \
                -p 80:80 \
                --restart always \
                $FRONTEND_IMAGE:latest
                '''
            }
        }

        /* ---------------- Cleanup ---------------- */

        stage('Clean Old Images') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
}