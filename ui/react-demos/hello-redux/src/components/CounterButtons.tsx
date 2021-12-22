import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { decrement, increment, isLoaded, isLoading, reset } from "../state/counterSlice";
import { AppDispatch } from "../state/store";

export function CounterButtons() {

    const dispatch: AppDispatch = useDispatch();

    function incrementByOne() {

        dispatch(isLoading);

        setTimeout(() => {
            dispatch(increment);
            dispatch(isLoaded);
        }, 2000);

    }

    function decrementByOne() {
        
        dispatch(isLoading);

        setTimeout(() => {
            dispatch(decrement);
            dispatch(isLoaded);
        }, 2000);

    }

    function resetCounter() {

        dispatch(isLoading);

        setTimeout(() => {
            dispatch(reset);
            dispatch(isLoaded);
        }, 2000);
    }


    return (
        <Row>
            <Col className="d-flex justify-content-center">
                <Button onClick={incrementByOne}>Add</Button>
                &nbsp;&nbsp;
                <Button onClick={decrementByOne}>Subtract</Button>
                &nbsp;&nbsp;
                <Button onClick={resetCounter}>Reset</Button>
            </Col>
        </Row>
    );
}