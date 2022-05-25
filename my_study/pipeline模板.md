# pipeline

#

```groovy
pipeline {
//设置代理机
    agent {
        label 'seroiuts01365_TSE'
    }

    stages {
        //大步骤分解
        stage('Check_URL') {
            //小步骤
            steps{
                sh label: '', script: '''#!/bin/bash
                wiki="https://grat-wiki.sero.wh.rnd.internal.ericsson.com/wiki/GRAT_CI_Nodes_Information"
                mia="https://mia.npee.gic.ericsson.se/"
                dumpire="https://cie-dumpire.sero.wh.rnd.internal.ericsson.com/scripts/dumpire.php"
        
                urls="$wiki $mia $dumpire"
                for url in $urls
                do
                    code=`curl -o /dev/null -u gratci:\\`cat /home/gratci/ewwgkkn/.dummy\\` --retry 3 --retry-max-time 8 -w %{http_code} -s "$url"`
                    if [ $code -eq 200 ];then
                        echo -e "$url: \\t\\t $code"
                    else
                        echo -e "$url:\\n is unavailable. PLS check!"
                        exit 1
                    fi
                done'''
            }
        }
        stage('Dummy_Push') {
            steps{
                sh label: '', script: '''#!/bin/bash
        
                #check user input
                if [ "$EID" == "" ]; then
                    echo "Warning: No USER was given! Exiting..."
                    exit 1
                fi
        
                #make sure it\'s not build accidently
                if [ "$Change_Weekend" == "No" ]; then
                    echo "Warning:Today is not the day for CW! Exiting..."
                    exit 1
                fi
        
                echo "********Dummy push is creating!PLS wating*********"
                cd /repo/${EID}/my_wd/workspace_design/common-grat
                echo "Dummy push --${EID} CW verify on $(date +%Y%m%d)"
                pwd'''
            }
        }
    }
}
```

## #在项目添加SonarQube代码审查（pipeline项目）

#/src/sonar-project.propertise

```python
#must be unique in a given SonarQube instance
sonar.projectKey=
#this is the name and version display in the SonarQube UI. Was mandatory prior to SonarQube
sonar.projectName=
sonar.projectVersion=1.0

#Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
#This property is optional if sonar.modules is set.
sonar.sources=.
sonar.exclusions=**/test/**,**/target/**

sonar.java.source=1.8
sonar.java.target=1.8

#Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8
```

#/src/Jenkinsfile

```groovy
pipeline{
    agent{
        label 'seroiuts01365_TSE'
    }
    stages{
        stage('Pull_Code'){
            steps{
                checkout()
            }
        }
        stage('Code_Checking'){
            steps{
                //引入代码审查工具 {自定义名} = tool '全局工具配置里面的工具名'==》图1
                script{
                    scannerHome = tool 'SonarQube_LI'
                }
                //引入SonarQube服务器的环境，这个是在配置里==》图2
                withSonarQubeEnv('Managed SonarQube SELI'){
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Publish_Project'){
            steps{
                内容
            }
        }
    }
}
```

![scannerHome = tool 'SonarQube_LI'](C:\Users\esichqe\AppData\Roaming\Typora\typora-user-images\image-20220304161910507.png)

![withSonarQubeEnv('Managed SonarQube SELI')](C:\Users\esichqe\AppData\Roaming\Typora\typora-user-images\image-20220304162019488.png)



