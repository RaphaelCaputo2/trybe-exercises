#!/bin/bash

VARIAVEL=`/home/raphael/Downloads/trybeshellscript/primeiraAula.sh`
if [ -e "$VARIAVEL" ]
then
 echo "O caminho $VARIAVEL está habilitado!"
 fi
if [ -r "$VARIAVEL" ]
then
echo "Voce tem permissao para executar $VARIAVEL"
else
echo "Voce nao tem permissao para executar $VARIAVEL"
fi
echo "Oi Mundo"
