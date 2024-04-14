create table entidade
(
    data_criacao date         null,
    id           bigint auto_increment primary key,
    dtype        varchar(31)  not null,
    nome         varchar(255) null,
    cpf          varchar(255) null,
    cnpj         varchar(255) null,
    telefone     varchar(255) null,
    email        varchar(255) null,
    senha        varchar(255) null,
    cep          varchar(255) null,
    logradouro   varchar(255) null,
    numero       int          null,
    complemento  varchar(255) null,
    bairro       varchar(255) null,
    cidade       varchar(255) null,
    estado       varchar(255) null,

    constraint UK_6uw8ktq6m368gh1g39jv62p0d
        unique (cnpj),
    constraint UK_7tgepxudnfygkyj3nfkepruot
        unique (email),
    constraint UK_oesmc2oqfw4qgfwotuq5l1u8
        unique (cpf)
);

create table chamado
(
    id              bigint auto_increment primary key,
    numero_chamado  varchar(255) null,
    data_abertura   date         null,
    data_fechamento date         null,
    prioridade      tinyint      null,
    status          tinyint      null,
    empresa_id      bigint       null,
    tecnico_id      bigint       null,
    titulo          varchar(255) null,
    observacoes     varchar(255) null,
    cep             varchar(255) null,
    logradouro      varchar(255) null,
    numero          int          null,
    complemento     varchar(255) null,
    bairro          varchar(255) null,
    cidade          varchar(255) null,
    estado          varchar(255) null,


    constraint FKn8n7erg1uu5ri43vojsodj259
        foreign key (empresa_id) references entidade (id),
    constraint FKpdtjlr6hovdublk3hn178klj2
        foreign key (tecnico_id) references entidade (id)
);

create table perfis
(
    perfis      int    null,
    entidade_id bigint not null,
    constraint FKxnvkyn65gtqd6b1erqvvdre4
        foreign key (entidade_id) references entidade (id)
);


