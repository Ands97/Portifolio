import { useStateValue } from "../contexts/stateContext";


export default () => {
    const [state, dispatch] = useStateValue();

    return (
        <button>{state.user.name} - {state.theme}</button>
    );
}