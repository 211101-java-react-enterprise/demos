interface IErrorMessageProps {
    errorMessage: string
}

function ErrorMessageComponent(props: IErrorMessageProps) {
    return (
        <p>{props.errorMessage}</p>
    );
}

export default ErrorMessageComponent;