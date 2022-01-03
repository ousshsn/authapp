pipeline {
  environment {
    registry = "ousshsn/docker-test"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ousshsn/authapp'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Install dotenv') {
      steps {
        bat 'npm install -g win-node-env'
      }
    }
     
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }      
  }
}