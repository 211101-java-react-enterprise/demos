import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countState } from "../state/counterSlice";
import { CounterButtons } from "./CounterButtons";
import { Loader } from "./Loader";

export function Counter() {

    const counterState = useSelector(countState);

    return (

        <Container>
            <Row>
                <Col>
                    <div>{ counterState.isLoading ? <Loader/> : counterState.count }</div>
                </Col>
            </Row>
        </Container>

    );
}