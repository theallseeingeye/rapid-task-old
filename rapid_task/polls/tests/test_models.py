from django.test import TestCase
from ..models import Feedback
from django.utils import timezone

class FeedbackModelTest(TestCase):
    def setUp(self):
        # to create data for the fields of the model
        Feedback.objects.create(email='bob@gmail.com', name='bob', content='blah blah blah')
        Feedback.objects.create(email='jack@gmail.com', name='jack', content='Lots of content here')

    def test_feedback_data_save(self):
        """
        Test to see if the data saves properly to the Feedback Model
        """

