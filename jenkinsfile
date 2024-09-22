pipeline {
    agent any

    environment {
        // Define environment variables
        IMAGE_NAME = 'frontend'
        DOCKERFILE_NAME = 'Dockerfile' // Name of your Dockerfile
    }

    stages {
        stage('checkout Git repository') {
            steps {
                
                git branch: 'main', credentialsId: '2159dd14-bf38-4ba6-8766-f73495d80fac', url: 'https://github.com/reachvigneshmohan/tracker.git'
            }
        }
        stage('Fetch and build dockerfile') {
            steps {
            script {
                    // Build Docker image using the specified Dockerfile
                    def image = docker.build("${IMAGE_NAME}:latest", "-f ${DOCKERFILE_NAME} .")
                }
            }
        }
        stage('Publish Artifact') {
            
            steps {
                
            script {
                    // Save the Docker image as a tar file
                    sh "docker save -o ${IMAGE_NAME}.tar ${IMAGE_NAME}:latest"
                    
                    // Archive the tar file as an artifact
                    archiveArtifacts artifacts: "${IMAGE_NAME}.tar", allowEmptyArchive: false
                }
            }
        }
    }
}
