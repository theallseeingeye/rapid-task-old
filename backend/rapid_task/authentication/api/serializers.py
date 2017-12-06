# from rest_framework import serializers
# from ..models import Account
#
#
# class AccountRegistrationSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(
#         write_only=True,
#         required=True,
#     )
#
#     class Meta:
#         model = Account
#         fields = (
#             'uuid', 'email', 'username', 'date_created', 'date_modified', 'password',
#         )
#         read_only_fields = ('date_created', 'date_modified')
#
#     def create(self, validated_data):
#         return Account.objects.create_user(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.email = validated_data.get('email', instance.email)
#         instance.username = validated_data.get('username', instance.username)
#
#         instance.save()
#         return instance

    # validate is called when the serializer method .isvalid() is called.
    # def validate(self, data):
    #     # To ensure there is a password in the field
    #     if not data['password'] or not data['confirm_password']:
    #         raise serializers.ValidationError(
    #             "Please enter a password and confirm it."
    #         )
    #     # To ensure the passwords are the same.
    #     if data['password'] != data['confirm_password']:
    #         raise serializers.ValidationError(
    #             "The passwords do not match"
    #         )
    #     return data