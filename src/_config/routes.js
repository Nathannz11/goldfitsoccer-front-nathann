import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'

import PrivateRoutes from '../utils/PrivateRoutes';
import Login from '../pages/login';
import LoginCreditals from '../pages/login-credentials';
import SignUp from '../pages/sign-up';
import Home from '../pages/home';
import SignUpAthlete from '../pages/sign-upAthlete';
import SignUpGuest from '../pages/sign-upGuest';
import FormAthlete1 from '../pages/formAthlete1';
import ModalConfirmation from '../pages/modal-confirmation';
import AthleteData from '../pages/athleteData';
import FormAthlete2 from '../pages/formAthlete2';
import FormAthlete3 from '../pages/formAthlete3';
import FormAthlete4 from '../pages/formAthlete4';
import FormAthlete5 from '../pages/formAthlete5';
import FormAthlete6 from '../pages/formAthlete6';
import EvaluateAthlete1 from '../pages/evaluateAthlete1';
import EvaluateAthlete2 from '../pages/evaluateAthlete2';
import EvaluateAthlete3 from '../pages/evaluateAthlete3';
import EvaluateAthlete4 from '../pages/evaluateAthlete4';
import SignUpAthlete2 from '../pages/sign-upAthlete2';
import Index from '../pages/index';
import GraphSportsPotential from '../pages/graphSportsPotencial';
import ModalConfirmationRegistry from '../pages/modal-atleta';
import SelectionMenu from '../pages/menu';
import { AuthProvider } from '../context/AuthContext';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <Route path="/" exact component={Index}/>
                    <Route path="/login-as" component={Login}/>
                    <Route path="/login-credentials" component={LoginCreditals}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/sign-upGuest" component={SignUpGuest}/>
                    <Route path="/modal" component={ModalConfirmation}/>
                    <Route path="/menu" component={SelectionMenu}/>
                    <Route path="/cadastro-atleta" component={SignUpAthlete}/>
                    <Route path="/cadastro-sucesso" component={ModalConfirmationRegistry}/>
                    <Route path="/cadastro-atleta-2" component={SignUpAthlete2}/>
                    <Route path="/evaluateAthlete1" component={EvaluateAthlete1}/>
                    <Route path="/evaluateAthlete2" component={EvaluateAthlete2}/>
                    <Route path="/evaluateAthlete3" component={EvaluateAthlete3}/>
                    <Route path="/evaluateAthlete4" component={EvaluateAthlete4}/>
                    <Route path="/formAthlete1" component={FormAthlete1}/>
                    <Route path="/formAthlete2" component={FormAthlete2}/>
                    <Route path="/formAthlete3" component={FormAthlete3}/>
                    <Route path="/formAthlete4" component={FormAthlete4}/>
                    <Route path="/formAthlete5" component={FormAthlete5}/>
                    <Route path="/formAthlete6" component={FormAthlete6}/>
                    <Route path="/avaliacao-potencial-esportivo" component={GraphSportsPotential} />
                    <Route path="/dados-atleta" component={AthleteData} />
                    <Route path="/home" component={Home}/>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}
