import { Container, InputGroup, ErrorMessage, NofiIcon } from './InputStyles';
import { Field } from 'formik';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRef, useEffect } from 'react';

const Input = ({
  Icon,
  type,
  name,
  placeholder,
  validateFunc,
  errorMessage,
  touched,
}) => {
  const messageRef = useRef();
  const wrapMessageRef = useRef();

  useEffect(() => {
    const height = messageRef.current.getBoundingClientRect().height;
    wrapMessageRef.current.style.height = height + 'px';
  }, [errorMessage]);

  return (
    <Container>
      <InputGroup>
        <div>
          <Icon />
        </div>
        <Field
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          validate={validateFunc}
        />
      </InputGroup>
      <ErrorMessage ref={wrapMessageRef}>
        <div ref={messageRef}>
          <span>{errorMessage}</span>
        </div>
      </ErrorMessage>
      <NofiIcon error={errorMessage ? 1 : 0}>
        {touched ? (
          errorMessage ? (
            <BiErrorCircle />
          ) : (
            <AiOutlineCheckCircle />
          )
        ) : (
          ''
        )}
      </NofiIcon>
    </Container>
  );
};

export default Input;
