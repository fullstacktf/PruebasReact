#!/bin/bash

echo "Soy Homer"

while :; do
  sleep 2
  comandoTESTBACKEND
  if [ $? -gt 0 ]; then
    echo 'Esto va mal reinicio Backend'
  fi

  comandoNOTESTBBDD
  if [ $? -gt 0 ]; then
    echo 'Esto va mal reinicio BBDD'
  fi
done
