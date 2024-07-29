import {
    reactExtension,
    Link,
    useCustomer,
    // useSettings,
    InlineStack,
    Text,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
    <Extension />
));

function Extension() {
    const customer = useCustomer();
    console.log("🚀 ~ Extension ~ customer:", customer);
    // const { login_url, link_text } = useSettings();

    if (customer) {
        return null;
    }

    const defaultLoginUrl = "https://my.maap.cc/login";

    return (
        <InlineStack spacing="tight">
            <Text>Have an account?</Text>
            <Link to={defaultLoginUrl} external>
                Log in
            </Link>
        </InlineStack>
    );
}
