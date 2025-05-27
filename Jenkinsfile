pipeline {
    agent any

    environment {
        IMAGE_NAME = "priyadarshini2604/restaurant-app"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/Priyanka-Keshav/Restaurant-Page.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Docker Login and Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat """
                    echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                    docker push %IMAGE_NAME%
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                bat "docker run -d -p 3000:3000 %IMAGE_NAME%"
            }
        }

        // 🔽 ADD THIS STAGE BELOW
        stage('Deploy to Kubernetes') {
            steps {
                bat "kubectl apply -f restaurant-deploy.yaml"
            }
        }
    }
}
