#include <stdio.h>
#include <stdlib.h>

int main()

    {

        float valor_final, valor, taxa;
        int tempo;

            printf(" Informe o valor da prestacao: ");
            scanf("%f", &valor);

            printf(" Informe a taxa de juros: ");
            scanf("%f", &taxa);

            printf(" Informe o tempo em dias: ");
            scanf("%d", &tempo);

            valor_final = valor + (valor * (taxa/100)*tempo);

            printf("\n A Prestacao a ser paga e: %.2f", valor_final);

                getch();
    
    }
