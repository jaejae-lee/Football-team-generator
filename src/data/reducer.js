import initial from './initial';

const reset = (initial, state) => {
    return {
        ...initial,
        submitted: !state.submitted
    };
}

const addPlayer = (state, action) => ({
    ...state, 
    player: action.form.player,
    nameError: action.form.nameError,
    submitted: action.form.submitted,
    playerList : [...action.form.playerList, action.form.player],
});

const generateTeams = (state, action) => ({
    ...state, 
    teamA: action.payload.teamA,
    teamB: action.payload.teamB,
});

// newState = state.filter( (player) => 
//                 player.id !== action.payload.id
//             );
//                 return newState;

const deletePlayer = (state, action) => ({
    ...state,

});

const reducer = (state, action) => {
    switch (action.type){
         case "addPlayer": return addPlayer(state, action);
         case "generateTeams": return generateTeams(state, action);
         case "deletePlayer": return deletePlayer(state, action);
         case "reset": return reset(initial);
         default: return state;
    };
};

export default reducer;