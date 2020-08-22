# #!/bin/bash

# echo "Shell script é demais"
# FRASE="Shel script com variavel é demais" 
# echo $FRASE
# HOSTNAME=$(hostname) echo "Este script está rodando no computador: $HOSTNAME" 

# FILE="/home/raphael/Downloads/trybeshellscript/primeiraAula.sh"
# if [ -e $FILE ]
# then
#   echo "Voce tem permissao para $FILE"
# fi 
# if [ -w $FILE ]
# then
#   echo "Voce tem permissão para edita $FILE"
# else
#   echo "Voce NAO foi autorizado a editar $FILE"
# fi

# read -p  "Por favor escreva o caminho do arquivo: " FILE
# if [ -f "$FILE" ]
# then
#   echo "$FILE é um arquivo comum"
# elif [ -d $FILE ]
# then 
#   echo "$FILE é um diretório"
# else
#   echo "$FILE é outra coisa"
#   fi
#   ls -l $FILE

# FILE=$1 
# if [ -f "$FILE" ] 
# then 
# echo "$FILE é um arquivo comum"
#  elif [ -d "$FILE" ] 
#  then 
#  echo "$FILE é um diretório" 
#  else 
#  echo "$FILE é alguma outra coisa" 
#  fi 
#  ls -l $FILE

#  DIRETORIO=$1 
#  if [ -d "$DIRETORIO" ] 
#  then 
#  FILES=`ls -l $DIRETORIO | wc -l`
#   echo "O $DIRETORIO tem $FILES arquivos."
#    else 
#    echo "O argumento $DIRETORIO não é um diretório!"
#     fi 


WORDS="shell script usando estrutura repetição for terminal" 
for WORD in $WORDS 
do 
echo $WORD 
done




 FILES=$@ 
 for FILE in $FILES
  do if [ -f "$FILE" ]
    then
     echo "$FILE é um arquivo comum"
      elif [ -d "$FILE" ]
       then 
       echo "$FILE é um diretório" 
        else
         echo "$FILE é alguma outra coisa" 
         fi 
         ls -l  $FILE
          done


