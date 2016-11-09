#!/bin/bash

## Remember to change the permission of the file for execution with:
## chmod 755 file.sh

## Comment

## Print txt
#echo "Hello World!"

## Variables	
#myName="Rodrigo"

#echo $myName

## Constant
#declare -r NUM1=5

#echo $NUM1

## Operations
#x=5
#y=4

#add=$((x+y))
#sub=$((x-y))
#mult=$((x*y))
#div=$((x/y))

#echo "5+4=$add"
#echo "5-4=$sub"
#echo "5*4=$mult"
#echo "5/4=$div"

## Power and module
#echo $((x**y))
#echo $((x%y))

## Shorthand operation
#a=5
#let a+=2

#echo "a=$a"

## Increment and decrement
#echo "a++ = $((a++))"
#echo "++a = $((++a))"
#echo "a-- = $((a--))"
#echo "--a = $((--a))"

## Floats with Python
#float1=1.2
#float2=3.4

#addFloat=$(python -c "print ($float1+$float2)")
#echo $addFloat

## Many lines

#cat<< END
#This text
#prints on 
#many lines
#END

## Functions

#getDate(){
#    date
#    return
#}
#getDate

## Local and global variables
#varTest="Global"

#localFunc(){
#    local varTest="Local"
#    echo $varTest
#    return
#}

#localFunc

#echo $varTest

## With Arguments
## $1, $2, etc, gets the variables in order
#getFullName(){
#    local name=$1
#    local surname=$2
#    local fullname="$name $surname"
#    echo $fullname
#}

#echo $(getFullName "Rodrigo" "Lima Batista")

## Receive input from the user
#read -p "What is your name? " name
#read -p "Hello $name! How are you? " how
#echo "So you're $how, that's interesting."

## Conditions
#read -p "How old are you? " age

## Options:
## eq = Equals to
## ne = Not equal to
## le = Less than or equals to
## lt = Less than
## ge = Greater than or equals to
## gt = Greater than

#if [ $age -ge 16 ]
#then
#    echo "You can vote"
#elif [ $age -ge 18 ]
#then
#    echo "You can drive, be safe"
#else
#    echo "You can't drive or vote, but at least you don't have to work. lol"	
#fi

## Alternative conditions 
#read -p "Enter your age: " num

#if ((num == 18)); then
#    echo "Great age, now go to work and study. haha"
#fi

#if ((num >= 7)); then
#    echo "You should know how to read by now."
#else
#    echo "You can run this, impressive."
#fi

#if (( ((num % 2)) == 0 )); then
#    echo "Your age is even"
#else
#    echo "Your age is odd"
#fi

#if (( ((num > 0)) && ((num < 12)) )); then
#    echo "Are you a good child? Don't answer that, I won't believe you anyway."
#fi

## Create dir if it doesn't exist and insert file into it
#[ -d samp_dir ] || mkdir samp_dir

#touch samp_file && mv samp_file samp_dir/samp_file

## Conditions with strings
#str1=""
#str2="Happy"
#str3="Bored"

#if [ $str1 ]; then
#    echo "str1 is not null"
#fi

#if [ -z "$str1" ]; then
#    echo "str1 has no value"
#fi

#if [ $str2 == $str3 ]; then
#    echo "$str2 equals $str3"
#elif [ $str2 != $str3 ]; then
#    echo "$str2 not equals $str3"
#fi

#if [ $str2 > $str3 ]; then
#    echo "$str2 is greater then $str3"
#elif [ $str2 < $str3 ]; then
#    echo "$str2 is less then $str3"
#fi

## Files
#file1="./file1"
#file2="./file2"

## if file exists
#file1="./test_file1"
#file2="./test_file2"

#if [ -e "$file1" ]; then
#    echo "$file1 exists"

#    if [ -f "$file1" ]; then
#        echo "$file1 is a normal file"
#    fi

#    if [ -r "$file1" ]; then
#        echo "$file1 is readable"
#    fi

#    if [ -w "$file1" ]; then
#        echo "$file1 is writable"
#    fi

#    if [ -x "$file1" ]; then
#        echo "$file1 is executable"
#    fi

#    if [ -d "$file1" ]; then
#        echo "$file1 is a directory"
#    fi

#    if [ -L "$file1" ]; then
#        echo "$file1 is a symbolic link"
#    fi

#    if [ -p "$file1" ]; then
#        echo "$file1 is a named pipe"
#    fi

#    if [ -S "$file1" ]; then
#        echo "$file1 is a network socket"
#    fi

#    if [ -G "$file1" ]; then
#        echo "$file1 is owned by the group"
#    fi

#    if [ -O "$file1" ]; then
#        echo "$file1 is owned by the userid"
#    fi

#fi

## Regular expressions

#read -p "Validate Date: " date
#pat="^[0-9]{8}$"

#if [[ $date =~$pat ]]; then
#    echo "$date is valid"
#else
#    echo "$date not valid"
#fi

## Reading options
#read -p "Enter 2 numbers to Sum: " num1 num2

#sum=$((num1+num2))

#echo "$num1 + $num2 = $sum"

#read -sp "Enter the secret code: " secret

#if [ $secret == "password" ]; then
#    echo "\nRight"
#else
#    echo "\nWrong"
#fi

## Change separators

#OIFS="$IFS"
#IFS=","

#read -p "Enter 2 numbers to add separated by a comma: " num1 num2

## Ignore whitespace
#num1=${num1//[[:blank:]]/}
#num2=${num2//[[:blank:]]/}

#sum=$((num1+num2))

#echo "$num1 + $num2 = $sum"

## Return old read separator
#IFS="$OIFS"

## Allow var concatenation with strings
#name="Rodrigo"
#echo "${name}'s notebook"

## Allow replacement of text
#samp_string="The dog climbed the tree"
#echo "${samp_string//dog/cat}"

## Check if var exists, if not print something else
#echo "I am ${name:=Rodrigo}"

## Switch case

#read -p "How old are you : " age

## Check the value of age
#case $age in

#    # Match numbers 0 - 4
#    [0-4]) 
#    echo "To young for school"
#    ;; # Stop checking further

#    # Match only 5
#    5)
#    echo "Go to kindergarten"
#    ;;

#    # Check 6 - 18
#    [6-9]|1[0-8])
#    grade=$((age-5))
#    echo "Go to grade $grade"
#    ;;

#    # Default action
#    *)
#    echo "You are to old for school"
#    ;;
#esac # End case

## Ternary
#can_vote=0

#((age >= 18?(can_vote=1):(can_vote=0)))

#echo "Can Vote: $can_vote" 

## String options
#rand_str="A random string"
#echo "String length: ${#rand_str}"
#echo "${rand_str:2}"
#echo "${rand_str:2:7}"
#echo "${rand_str#*A }"

## Looping

#num=1

#while [ $num -le 10 ]; do 
#    echo $num
#    num=$((num + 1))
#done

#num=1

#while [ $num -le 20 ]; do
#    if (( ((num % 2)) == 0)); then
#        num=$((num + 1))
#        continue
#    fi
	
#    if ((num >= 15)); then
#        break
#    fi

#    echo $num
#    num=$((num + 1))
#done

#num=1

#until [ $num -gt 10 ]; do
#    echo $num
#    num=$((num + 1))
#done

## Get file data
## Separate values with a space in the file
#while read height weight year; do
#    printf "Height: ${height}\nWeight: ${weight}\nYear: ${year}\n"
#done < file.txt

#for (( i=0; i <=10; i=i+1)); do
#    echo $i
#done

#for i in {A..Z}; do
#    echo $i
#done

## Arrays
#fav_nums=(3.14 2.718 0.57721 4.6692)

#echo "Pi: ${fav_nums[0]}"

#fav_nums[4]=1.618

#echo "GR: ${fav_nums[4]}"

#fav_nums+=(1 7)

#for i in ${fav_nums[*]}; do
	#echo $i
#done

#for i in ${fav_nums[@]}; do
	#echo $i
#done

#echo "Array length: ${#fav_nums[@]}"
#echo "Index 3 length: ${#fav_nums[3]}"

## Sort numbers
#sorted_nums=($(for i in "${fav_nums[@]}"; do
	#echo $i;
#done | sort))


#for i in ${sorted_nums[*]}; do
	#echo $i
#done

## Remove one index from array
#unset 'sorted_nums[1]'
## Remove complete array
#unset sorted_nums

## Parameter expansion, to accept more than 10 arguments

#echo "1st Argument: $1"

#sum=0

## Get all parameters greater than 0 with $#
#while [[ $# -gt 0 ]]; do
	#num=$1
	#sum=$((sum + num))
	#shift
#done

#echo "Sum: $sum"

