pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "yourdockerhubusername/mern-backend"
        CONTAINER_NAME = "mern-backend-container"
        PORT = "5000"
    }

    stages {

        stage('Pull Latest Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Pull Docker Image') {
            steps {
                sh 'docker pull $DOCKER_IMAGE:latest'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 5000:5000 \
                --restart always \
                $DOCKER_IMAGE:latest
                '''
            }
        }

        stage('Clean Old Images') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
}