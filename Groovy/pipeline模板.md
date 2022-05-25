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
        stage('Dummy_push') {
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
                rm -rf common-grat
                git clone https://gratci@gerrit.ericsson.se/a/grat/common-grat && (cd common-grat && mkdir -p .git/hooks && curl -Lo `git rev-parse --git-dir`/hooks/commit-msg https://gratci@gerrit.ericsson.se/tools/hooks/commit-msg; chmod +x `git rev-parse --git-dir`/hooks/commit-msg)
                cd common-grat
                echo "Dummy push -- ${EID} CW verify on `date +%Y%m%d`" >> README.txt
                git add README.txt
                git commit -m "[GRAT_DUM]:${EID}_Dummy push for CW on `date +%Y%m%d`"
                git pull --rebase
                git push origin HEAD:refs/for/master'''
            }
        }
    }
}
