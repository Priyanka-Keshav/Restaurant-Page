pipeline {
    agent any

    environment {
        IMAGE_NAME = "priyadarshini2604/restaurant-app"
    }

    stages {
        stage('Clone Repo') {
            steps {
                // Public repo—no creds needed
                git url: 'https://github.com/Priyanka-Keshav/Restaurant-Page.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Use bat on Windows
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Docker Login and Push') {
            steps {
                // Use your dockerhub creds stored as 'dockerhub'
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
    }
}
