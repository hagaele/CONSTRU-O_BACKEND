Cadastro de Pessoas (CRUD)

id
nome
cpf
email
dataNascimento

rota -> /Pessoas -> indentifica o recurso Pessoa

#Busca
Get /Pessoas

#Busca po id
Get /Pessoas/ :id

#Criação
POST /Pessoas 

#Atualização
PUT ou PATCH /Pessoas/:id

#Remoção
DELETE /Pessoas/ :id

