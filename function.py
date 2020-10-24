# def compareTriplets(a, b):
#     i = 0
#     my_list=[]
#     sum_1=0
#     sum_2=0
#     while i < len(a):
#         if a[i]>b[i]:
#             sum_1=sum_1+1 
#             # print(sum_1)
#         elif a[i]<b[i]:
#             sum_2=sum_2+1
#         i = i + 1
#     print(sum_1)
#     my_list.append(sum_2)
#     my_list.append(sum_1)
#     return my_list
# print(compareTriplets([5, 6, 7],[3, 6, 10]))

arr = [[6,8],
    [-6,9]]
    
n = 2
d1 = 0
d2 = 0
  
for i in range(0, n): 
    d1 = d1 + arr[i][i] 
    d2 = d2 + arr[i][n - i - 1] 
print(d1 - d2)