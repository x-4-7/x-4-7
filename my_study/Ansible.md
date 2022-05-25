# Ansible

## 本章内容

### 运维自动化发展历程及技术应用

### Ansible命令使用

### Ansible常用模块详解

### YAML语法简介

### Ansible palybook基础

### Playbook变量、tags、handlers使用

### Playbook模板templates

### Playbook条件判断when

### Playbook字典with_items

### Ansible Roles



```groovy
pipeline {
    agent {
        label 'seroiuts01365_TSE'
    }
  
    stages {
        stage('Check_URL') {
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
                cd /repo/${EID}/my_wd/workspace_design/common-grat
                echo "Dummy push --${EID} CW verify on $(date +%Y%m%d)"
                pwd'''
            }
        }
    }
}
```



###  

