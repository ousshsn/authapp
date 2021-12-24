pipeline {
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
  }
}