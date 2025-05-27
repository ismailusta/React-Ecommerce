import { Alert, AlertTitle, Button, Container, List, ListItem, ListItemText } from "@mui/material";
import requests from "../api/requests";
import { useState } from "react";

export function ErrorPage() {
    const [validationErrors, setErrors] = useState<String[]>([]);

    function getValidationErrors(){
        requests.Errors.getValidationError()
        .then(()=> console.log("No Validation Error"))
        .catch(errors => {
            setErrors(errors);  
        })
    }
    return (
        <Container>
            {validationErrors.length > 0 && (
                <Alert severity="error" sx={{mb: 2}}>
                    <AlertTitle>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map((error, index) => (
                            <ListItem key={index}>
                                <ListItemText>
                                    {error}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            )}
            <Button sx={{mr: 2}} variant="contained" onClick={() => requests.Errors.get400Error()
                .catch(error => console.error("400 Error:", error))}>
                Test 400 Error
            </Button>
            <Button sx={{mr: 2}} variant="contained" onClick={() => requests.Errors.get401Error()
                .catch(error => console.error("401 Error:", error))}>
                Test 401 Error
            </Button>
            <Button sx={{mr: 2}} variant="contained" onClick={() => requests.Errors.get404Error()
                .catch(error => console.error("404 Error:", error))}>
                Test 404 Error
            </Button>
            <Button sx={{mr: 2}} variant="contained" onClick={() => requests.Errors.get500Error()
                .catch(error => console.error("500 Error:", error))}>
                Test 500 Error
            </Button>
            <Button sx={{mr: 2}} variant="contained" onClick={() => {getValidationErrors()}}>
                Test Validation Error
            </Button>
        </Container>
    )
}
export default ErrorPage;