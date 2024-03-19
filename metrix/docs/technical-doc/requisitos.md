---
sidebar_position: 1
---

# Requisitos

Após apresentar o Metrix, aqui iremos formalizar os Requisitos **Funcionais** e **Não Funcionais**.

## Requisitos Funcionais
    - **RF01 - Registro de Usuário**
        - `O usuário deve poder se registrar através de um login SSO`

    - **RF02 - Autenticação de Usuário**
        - `O usuário deve ser capaz de fazer login utilizando SSO`
        - `O usuário Administrador deverá ser capaz de adicionar novos usuários Simples`

    - **RF03 - Plataforma**
        - `O programa deverá ser desenvolvido seguindo os padrões do Desenvolvimento WEB`
        - `O programa deverá ser hospedado em ambiente WEB`

    - **RF04 - Painel Inicial**
        - `O usuários devem ser capazes de visualizar indicativos de equipamentos próximos a data de calibração, equipamentos calibrados e equipamentos inutilizados`

    - **RF05 - Informações dos Instrumentos**
        - `Detalhes como familia, nome do instrumento e código devem ser aplicados a cada instrumento`

    - **RF06 - Cadastros**
        - `O usuário deve ser capaz de adicionar familias ao Sistema`
        - `O usuário deve ser capaz de adicionar Instrumento a família já criada anteriormente`
        - `O usuário deve ser capaz de adicionar informações sobre calibração a um instrumento já adiconado`

    - **RF07 - Consultas**
        - `O usuário deverá visualizar os instrumentos já cadastrados, assim como suas famílias`
        - `Deve visualizar o período de calibração dos instrumentos cadastrados`
        - `Deverá visualizar o status de um instrumento (Em uso, Em calibração)`
        - `Deverá visualizar calibrações anteriores de um instrumento`

    - **RF08 - Informações de Calibração**
        - `O usuário deve receber atualizações sobre instrumentos que estão próximos do período de Calibração`
        - `O usuário poderá bloquear um Instrumento em Uso para calibrar`
        - `O usuário deverá anexar as informações recebidas da Calibração no sistema`
        - `O sistema deverá gerar dados dessas informações recebidas`

## Requisitos Não Funcionais
    - **RNF01 - Tempo de Carregamento**
        - `Todas as páginas do website devem ser carregadas em até 2 segundos em uma conexão de internet padrão`
    
    - **RNF02 - Segurança**
        - `Todos os dados do usuário devem ser criptografados e armazenados de forma segura`

    - **RNF03 - Disponibilidade**
        - `O serviço deve estar disponível 99,9% do tempo`

    - **RNF04 - Escalabilidade**
        - `O sistema deve ser capaz de suportar até 1.000 usuários simultâneos`
        - `O sistema deve ser capaz de suportar até 10.000 instrumentos cadastrados`

    - **RNF05 - Compatibilidade**
        - `O website deve ser compátivel com todos os Navegadores Web atuais`
        - `O website deve ser responsivo a todas as telas de Notebooks e Computadores`

    - **RNF06 - Usabilidade**
        - `O aplicativo deve ser intuitivo e fácil de usar, com um tempo máximo de aprendizado de 60 minutos para novos usuários`