import React from 'react';
import PropType from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {A} from 'hookrouter';
import ConcluirTarefa from './concluir-tarefa';

function ItensListaTarefas(props){

    function marcarConcluida(tarefa){
        return tarefa.concluida ? 'line-through' : 'none';
    }

    return(
        props.tarefas.map(tarefa => 
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%"
                    data-testid="nome-tarefa"
                    style={{textDecoration:marcarConcluida(tarefa)}}>
                        {tarefa.nome}
                </td>
                <td className="text-right">
                    <ConcluirTarefa
                        tarefa={tarefa}
                        recarregarTarefas={props.recarregarTarefas}
                        className={tarefa.concluida ? 'hidden' : null} />
                    &nbsp;
                    <A href={"/atualizar/" + tarefa.id}
                       className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
                       <FontAwesomeIcon icon={faEdit}/>
                    </A>
                </td>
            </tr>
        )
    );
}

ItensListaTarefas.propTypes={
    tarefas: PropType.array.isRequired,
    recarregarTarefas: PropType.func.isRequired
}

export default ItensListaTarefas;