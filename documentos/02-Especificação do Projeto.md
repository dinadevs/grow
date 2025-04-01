# Especificações do Projeto

## Perfis de Usuários

<table>
<tbody> 
<tr> 
<th colspan="2">Perfil 1: Pais/Responsáveis </th> 
</tr> 
 <tr> 
 <td width="150px"><b>Descrição</b></td> 
  <td width="600px"> 
   Pais ou responsáveis com filhos entre 6 e 14 anos 
  </td> 
  </tr>
 <tr>
  <td><b>Necessidades</b></td>
  <td>
1. Acompanhar e incentivar hábitos saudáveis nos filhos de forma lúdica e organizada. 
2. Interface simples e de fácil navegação. 
3. Gerenciar as tarefas dos filhos e suas recompensas. 
4. Comunicação clara e objetiva que auxilie na interação com as crianças. 
5. Dar feedback positivo ou negativo aos filhos. 
  </td>
 </tr>
</tbody>
</table>

<table>
 <tbody>
  <tr>
   <th colspan="2">Perfil 2: Filho(a) </th> 
  </tr>
  <tr>
  <td width="150px"><b>Descrição</b></td> 
    <td width="600xp">
     Filho(a) entre 6 e 14 anos 
    </td>
  </tr>
  <tr> 
  <td><b>Necessidades</b></td>
   <td>
1. Desafios motivadores e recompensas que incentivem a participação contínua. 
2. Se divertir fazendo suas atividades. 
3. Poder gerenciar e mostrar aos pais sua rotina. 
4. Obter hábitos e conhecimentos saudáveis
   </td>
  </tr>
 </tbody>
</table>


## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`             | QUERO/PRECISO ... `FUNCIONALIDADE`                                                       | PARA ... `MOTIVO/VALOR`                                                                             |
|----------------------------------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Pais/Responsáveis e Filho(a)     | Acessar a minha conta.                                                                  | Poder utilizar a aplicação com minha conta.                                                          |
| Pais/Responsáveis                | Vincular as minhas informações de registro aos meu(s) filho(s).                         | Fazer a gestão das atividades e metas, acompanhando o progresso do(s) meu(s) filho(s).               |
| Pais/Responsáveis                | Definir atividades a serem realizadas pelo meu filho.                                    | Ajudá-lo a desenvolver hábitos saudáveis e criar uma rotina organizada.                              |
| Pais/Responsáveis                | Definir as metas a serem cumpridas pelo meu filho, estipulando prazos.                   | Ajudá-lo a desenvolver hábitos saudáveis e criar uma rotina organizada.                              |
| Pais/Responsáveis                | Definir recompensas para cada estágio alcançado.                                         | Recompensar meu filho de forma justa quando ele completar suas tarefas.                              |
| Pais/Responsáveis                | Aprovar as atividades finalizadas.                                                       | Garantir que meu filho cumpra as tarefas antes de receber as recompensas.                            |
| Pais/Responsáveis                | Definir punições para o descumprimento de metas.                                         | Ensiná-lo sobre responsabilidade e consequências.                                                    |
| Filho(a)                          | Acompanhar meu progresso para alcançar uma meta.                                         | Acompanhar o que falta para ganhar uma recompensa e me manter motivado.                              |
| Filho(a)                          | Visualizar minha trilha de trajetória (nível, XP, barra de progresso etc.).              | Acompanhar meu progresso e as recompensas conquistadas.                                              |
| Filho(a)                          | Ganhar moedas na plataforma ao completar tarefas.                                        | Trocar por prêmios e me sentir motivado a continuar realizando as atividades.                        |
| Filho(a)                          | Trocar as moedas acumuladas na “loja de conquistas”.                                     | Escolher o prêmio de minha preferência e me sentir motivado a continuar.                             |
| Filho(a)                          | Escolher meu próprio avatar.                                                             | Personalizar minha experiência na plataforma.                                                        |


## Requisitos

### Requisitos Funcionais

| **ID**    | **Descrição do Requisito**                                                                 | **Prioridade** |
|-----------|---------------------------------------------------------------------------------------------|---------------|
|RF-01| A aplicação deve permitir ao usuário fazer o login da sua conta.                            | ALTA          |
|RF-02| A aplicação deve permitir que o pai/responsável cadastre sua conta e a de seus filhos.      | ALTA          |
|RF-03| Permitir que pais ou responsáveis cadastrem atividades.                                     | ALTA          |
|RF-04| Permitir que pais ou responsáveis cadastrem metas e estipulem prazos.                       | ALTA          |
|RF-05| Possibilitar que os pais definam bonificações para cada estágio alcançado.                  | ALTA          |
|RF-06| Atividades finalizadas devem ser exibidas para aprovação dos pais.                          | ALTA          |
|RF-07| Permitir o cadastro e contabilização de penalidades.                                        | ALTA          |
|RF-08| Disponibilizar um checklist para gerenciar tarefas e metas, permitindo marcar concluídas.   | ALTA          |
|RF-09| Disponibilizar uma tela de visualização de trajetória (nível, XP, barra de progresso etc.). | ALTA          |
|RF-10| Contabilizar moedas e/ou experiência (XP) ao completar uma tarefa.                          | MÉDIA         |
|RF-11| A aplicação deve permitir que o filho utilize suas moedas para trocar por prêmios.          | MÉDIA         |
|RF-12| Possibilitar a escolha de um avatar.                                                        | BAIXA         |

**Prioridade: Alta / Média / Baixa.  

### Requisitos Não Funcionais

| **ID**     | **Descrição do Requisito**                                                                                                    | **Prioridade** |
|------------|-------------------------------------------------------------------------------------------------------------------------------|---------------|
|RNF-01| Incluir feedbacks sonoros para quando o usuário realiza ações, como finalizar atividades ou receber penalidade.               | BAIXA         |
|RNF-02| O armazenamento das informações deve ser local no navegador.                                                                  | ALTA          |
|RNF-03| A plataforma deve ser compatível com navegadores modernos (Chrome, Firefox, Edge, Safari) em suas versões mais recentes.       | ALTA          |
|RNF-04| As senhas dos usuários devem ter no mínimo 8 caracteres (incluindo letras maiúsculas, minúsculas, números e caracteres especiais). | ALTA          |
|RNF-05| Garantir responsividade para que a plataforma seja acessível tanto em desktop quanto em dispositivos móveis.                  | ALTA          |

**Prioridade: Alta / Média / Baixa.
