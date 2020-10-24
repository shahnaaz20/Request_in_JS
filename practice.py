# def int_to_float(number):
#     number = float(number)
#     if type(number)==float:
#         number = str(number)
#         integer = ""
#         for i in number:
#             if i==".":
#                 break
#             else:
#                 integer+=i
#         return integer
#     else:
#         return number
# print(int_to_float("1234"))


#num = int(input())
#num1 = int(input())
#while num <= num1:
 #   j = 1
  #  while j <= 10:
   #     print(num,"*",j,"=",j*num)
    #    j = j + 1
    #print("")
    #num = num + 1
    
# numbers=[1,2,3,[3,[4,3,2,1],1,6],0,0]
# print(numbers[0],numbers[3][0],numbers[3][1][1],numbers[3][2],numbers[5])
#i=[1,2,3,[3,[4,3,2,1],1,6],0,0]
# print(i[4])
#print(i[1],i[3][1][1]),i[3][2],i[4])
#print(i[1],i[3][0],i[3][2],i[4])
#print(i[1],i[3][1][1],i[3][2],i[4])

# numbers=[[1,2,3],
# [3,4,5],
# [6.4,7]]
# sum=0
# i=0
string="i am sandhya"
string1=" "
a=[]
i=0
while i<len(string):
    j=0
    while j<i:
        string1=(string[j])
        a.append(string1)
        j=j+1
    i=i+1
print(a)