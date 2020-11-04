# # #!/bin/bash

# #   TAREFAS="Viajar votar beber sair trabalhar"

# # read -p "Qual é o seu nome? " NOME 

# #   echo "Muito prazer, $NOME"

# # read -p "Qual a sua idade? " IDADE 

# #   if [ $IDADE -lt 18 ]
# # then
# #   echo "Voce Nao pode beber, votar e casar"
# # else
# #   for ITEM in $TAREFAS 
# #   do
# #     echo "Agora voce ja pode $ITEM sem se preocupar"

# #     done
# #   fi

# CAMINHO="/home/raphael/Documentos/Aulas_Trybe/trybeshellscript/raphael.txt"

# if [ $CAMINHO ]
# then
#   echo "O caminho $CAMINHO está habilitado" 
#   fi
#   if [ -w $CAMINHO ]
#   then
#   echo "Voce tem permissão para editar "
#   else
#   echo "Voce nao foi autorizado a editar"
#   fi

# CONTAGEM="/home/raphael/Documentos/Aulas_Trybe/trybeshellscript/guardaVolume"
# if [ -f $CONTAGEM ]
# then
#   echo "O argumento GuardaVolume nao é um diretorio"
# elif [ -d $CONTAGEM ]
#   then 
#   echo "O argumento guarda volume é um diretorio, e tem `ls -lg` arquivos"
#   fi

# PALAVRAS="Shell script usando estrutura de repetição for terminal"
# for PALAVRA in $PALAVRAS
# do
# echo "$PALAVRA"
# done






  #!/bin/bash
 FILES=$@

 for FILE in $FILES
 do
 if [ -f "$FILE" ]
 then
    echo "$FILE é um arquivo comum"
    elif [ -d "$FILE" ]
    then
      echo "$FILE é um diretorio"
        else
          echo "$FILE é alguma outra coisa"
          fi

        ls -l $FILE
        done











