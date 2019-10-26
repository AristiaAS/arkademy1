function is_username_valid(username)
{
const nameFormat = new RegExp("^([a-z][a-z][a-z][a-z][_.][0-9][0-9][0-9])$");
if (nameFormat.test(username)) {
    console.log("Valid");
    return true;
} else {
    console.log("Invalid");
    return false;
}
}
is_username_valid("yani_123");

function is_name_valid(username)
{
const nameFormat = new RegExp("^([A-Z][A-Z][A-Z][A-Z]*)$");
if (nameFormat.test(username)) {
    console.log("Valid");
    return true;
} else {
    console.log("Invalid");
    return false;
}
}
is_name_valid("TIARA");

function is_age_valid(age)
{
const nameFormat = new RegExp("^([0-9][0-9])$");
if (nameFormat.test(age)) {
    console.log("Valid");
    return true;
} else {
    console.log("Invalid");
    return false;
}
}
is_age_valid("45");