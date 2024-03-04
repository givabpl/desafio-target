<?php

    function faturamentoEstados() {
        $dados = [
            'SP' => 67836.43,
            'RJ' => 36678.66,
            'MG' => 29229.88,
            'ES' => 27165.48,
            'OUTROS' => 19849.53,
        ];

        $soma = array_sum($dados);

        $porcentagens = [];

        foreach ($dados as $uf => $valor) {
            $porcentagens[$uf] = number_format(($valor / $soma) * 100, 2);
        }

        foreach ($porcentagens as $uf => $porcentagem) {
            echo "$uf: $porcentagem%<br>";
        }
    }
    faturamentoEstados();