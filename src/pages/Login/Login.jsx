// Atividade 2:
// Crie um novo componente chamado Login.
//Utilize React Router para especificar uma nova rota que renderize este novo componente. Para este componente crie dois campos de formulário para o e-mail e senha, e um botão de submit. Crie também um botão para possibilitar a autenticação via Google. Utilize React Bootstrap para estruturar está página.
//A estilização fica a seu critério, seja criativo.
import "./Login.css"

export function Login() {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                    <div className="form-group mt-3">
                        <label>E-mail</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Informe seu e-mail"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Senha</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Informe sua senha"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Esqueceu a <a href="#">senha?</a>
                    </p>
                </div>
            </form>
        </div>


    );
};