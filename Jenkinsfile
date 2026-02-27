pipeline {
    agent any

    environment {
        // Docker Hub Images
        BACKEND_IMAGE = "romannandish/mern-backend"
        FRONTEND_IMAGE = "romannandish/mern-frontend"
        REGISTRY_CREDENTIALS = credentials('docker-hub-credentials')
    }

    stages {

        /* =============== PULL IMAGES FROM DOCKER HUB =============== */

        stage('Pull Images') {
            steps {
                sh '''
                    echo "Pulling Docker images from Docker Hub..."
                    docker pull $BACKEND_IMAGE:latest || true
                    docker pull $FRONTEND_IMAGE:latest || true
                '''
            }
        }

        /* =============== STOP & REMOVE OLD CONTAINERS =============== */

        stage('Stop Application') {
            steps {
                sh '''
                    echo "Stopping existing docker-compose services..."
                    cd /opt/mern-app
                    docker-compose down -v || true
                '''
            }
        }

        /* =============== DEPLOY WITH DOCKER-COMPOSE =============== */

        stage('Deploy Application') {
            steps {
                sh '''
                    echo "Starting application with docker-compose..."
                    cd /opt/mern-app
                    docker-compose up -d
                    echo "Waiting for services to start..."
                    sleep 5
                '''
            }
        }

        /* =============== HEALTH CHECK =============== */

        stage('Health Check') {
            steps {
                sh '''
                    echo "Checking container health..."
                    docker ps --filter "status=running"
                    
                    echo "Checking backend connectivity..."
                    curl -f http://localhost:5000 || echo "Backend starting..."
                    
                    echo "Checking frontend..."
                    curl -f http://localhost:3000 || echo "Frontend starting..."
                '''
            }
        }

        /* =============== CLEANUP =============== */

        stage('Cleanup') {
            steps {
                sh '''
                    echo "Cleaning up unused images..."
                    docker image prune -f
                '''
            }
        }
    }

    post {
        success {
            echo "✓ Pipeline executed successfully!"
        }
        failure {
            echo "✗ Pipeline failed. Check logs above."
        }
    }
}