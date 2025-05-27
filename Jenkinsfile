pipeline {
    agent any

    environment {
        IMAGE_NAME = "priyadarshini2604/restaurant-app"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Priyanka-Keshav/Restaurant-Page.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 $IMAGE_NAME'
            }
        }
    }
}
