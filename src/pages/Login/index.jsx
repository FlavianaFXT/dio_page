import { useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../Components/Button';

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres')
.required(),}).required('Campo obrigatório');

const Login = ( ) => {
    const navigate = useNavigate();

    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async dataForm => {
        try {
            const {data} = await Api.get(`users?email=${dataForm.email}&senha=${dataForm.password}`);
            if(data.length===1){
                navigate('/feed')
            }else{
                alert('Email ou Senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
    };

    const handleClickSignIn = () => {
        navigate('/feed')
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e  make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input name='email' control={control} placeholder="E-mail" type='email' errorMessage={errors?.email?.message}/><br/>
                        <Input name='password' control={control} placeholder="Senha" type="password"/><br/>
                        <Button title="Entrar" variant="secondary" onClick = { handleClickSignIn } type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    );
};

export { Login };
