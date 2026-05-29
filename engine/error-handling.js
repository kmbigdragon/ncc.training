// try - catch - finally + throw + async handle
const fetchUser = async (userId) => {
    try {
        setLoading(true);
        return await getUser(userId);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        setLoading(false);
    }
}

// throwing
const divide = (numerator, denumerator) => {
    if (denumerator === 0) {
        throw new Error("cannot divide by zero");
    }
    return numerator / denumerator;
}
try {
    console.log(divide(3, 2));
    console.log(divide(3, 0));
} catch (err) {
    console.log("Caught error!");
    console.error(err);
}