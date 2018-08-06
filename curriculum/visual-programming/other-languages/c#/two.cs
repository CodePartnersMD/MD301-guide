public string AddValue(string value, int position)
{
    string[] myArray = new string[5];

    if (position >= myArray.Length)
    {
        return "Not a valid index";
    }

    for (int i = 0; i < myArray.Length; i++)
    {
        if (i == position)
        {
            myArray[position] = value;
        }
    }
    return $"Your value of {value} was accepted";
}

AddValue('sample string', 5);
AddValue('another string', 2);
